/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Website } from "./api/resources/website/client/Client";

export declare namespace FernWebsiteClient {
    interface Options {
        environment: core.Supplier<string>;
        username?: core.Supplier<string | undefined>;
        password?: core.Supplier<string | undefined>;
    }
}

export class FernWebsiteClient {
    constructor(protected readonly options: FernWebsiteClient.Options) {}

    protected _website: Website | undefined;

    public get website(): Website {
        return (this._website ??= new Website(this.options));
    }
}