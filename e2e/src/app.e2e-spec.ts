import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('tmdb App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Movie viewer');
    });

    it('should switch to dark mode and back', () => {
        page.navigateTo();
        page.getDarkModeSlider().click();
        expect(element(by.css('body')).getAttribute('class')).toMatch('darkMode');
        page.getDarkModeSlider().click();
        expect(element(by.css('body')).getAttribute('class')).toEqual('');
    });

    it('should load elements into the movies list', () => {
        page.navigateTo();
        expect(page.getMoviesList().count()).toBeGreaterThan(0);
    });

    it('should display only matching results when searching [using the first element text]', () => {
        page.navigateTo();
        page.getMoviesList().first().getText().then(searchTerm => {
            expect(searchTerm.length).toBeGreaterThan(0);
            page.getSearchInput().sendKeys(searchTerm);
            page.getMoviesList().each(movieItem => {
                expect(movieItem.getText()).toMatch(searchTerm);
            });
        });
    });

    it('should match movie title when opening movie details', () => {
        page.navigateTo();
        page.getMoviesList().first().getText().then(movieTitle => {
            page.getMoviesList().first().element(by.css('.movie-item')).click();
            expect(page.getMovieDetailsTitleText()).toEqual(movieTitle);
        });
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
