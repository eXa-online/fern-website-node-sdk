/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as FernWebsite from "../../../../../../api";
import * as core from "../../../../../../core";

export const Article: core.serialization.ObjectSchema<serializers.fixtures.Article.Raw, FernWebsite.fixtures.Article> =
    core.serialization.object({
        slug: core.serialization.lazy(async () => (await import("../../../../..")).fixtures.ArticleSlug),
        title: core.serialization.string(),
        image: core.serialization.string().optional(),
        publicationeDate: core.serialization.property("publicatione-date", core.serialization.date()),
        richtext: core.serialization.string().optional(),
    });

export declare namespace Article {
    interface Raw {
        slug: serializers.fixtures.ArticleSlug.Raw;
        title: string;
        image?: string | null;
        "publicatione-date": string;
        richtext?: string | null;
    }
}
