import { browser, by, element } from 'protractor';
import { WebdriverWebElement } from 'protractor/built/element';

export class AppPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    getTitleText(): Promise<string> {
        return element(by.css('app-root app-header h1')).getText() as Promise<string>;
    }

    getMovieDetailsTitleText(): Promise<string> {
        return element(by.css('.movie-details h1')).getText() as Promise<string>;
    }

    getDarkModeSlider() {
        return element(by.css('app-root app-header mat-slide-toggle'));
    }

    getMoviesList() {
        return element.all(by.css('.left-col app-movie-item'));
    }

    getSearchInput() {
        return element(by.css('app-root app-header input[type="search"]'));
    }
}
