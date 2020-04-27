import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({providedIn: CoreModule})
export class LocalStorageService {
    constructor() {
    }

    public setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public getItem(key: string): string {
        return localStorage.getItem(key);
    }

    public removeItem(key: string) {
        localStorage.removeItem(key);
    }
}
