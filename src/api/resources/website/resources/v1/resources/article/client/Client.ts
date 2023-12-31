/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../../../core";
import * as FernWebsite from "../../../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../serialization";
import * as errors from "../../../../../../../../errors";

export declare namespace Article {
    interface Options {
        environment: core.Supplier<string>;
        username?: core.Supplier<string | undefined>;
        password?: core.Supplier<string | undefined>;
    }
}

export class Article {
    constructor(protected readonly options: Article.Options) {}

    /**
     * Retrieve all articles from the content store
     * @throws {@link FernWebsite.NotFoundError}
     * @throws {@link FernWebsite.BadRequestError}
     */
    public async getArticles(): Promise<FernWebsite.fixtures.ArticleCollection> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "/articles"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@exa-online/fern-website-node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.fixtures.ArticleCollection.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new FernWebsite.NotFoundError();
                case 400:
                    throw new FernWebsite.BadRequestError();
                default:
                    throw new errors.FernWebsiteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FernWebsiteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FernWebsiteTimeoutError();
            case "unknown":
                throw new errors.FernWebsiteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve an article from the content store based on its slug
     * @throws {@link FernWebsite.website.v1.ArticleDoesNotExistError}
     * @throws {@link FernWebsite.NotFoundError}
     * @throws {@link FernWebsite.BadRequestError}
     */
    public async getArticle(slug: FernWebsite.fixtures.ArticleSlug): Promise<FernWebsite.fixtures.Article> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this.options.environment),
                `/articles/${await serializers.fixtures.ArticleSlug.jsonOrThrow(slug)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@exa-online/fern-website-node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.fixtures.Article.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new FernWebsite.website.v1.ArticleDoesNotExistError(
                        await serializers.fixtures.ArticleSlug.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new FernWebsite.NotFoundError();
                case 400:
                    throw new FernWebsite.BadRequestError();
                default:
                    throw new errors.FernWebsiteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FernWebsiteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FernWebsiteTimeoutError();
            case "unknown":
                throw new errors.FernWebsiteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new article to the content store
     * @throws {@link FernWebsite.NotFoundError}
     * @throws {@link FernWebsite.BadRequestError}
     */
    public async createArticle(
        request: FernWebsite.fixtures.CreatArticleRequest
    ): Promise<FernWebsite.fixtures.ArticleSlug> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "/articles"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@exa-online/fern-website-node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            body: await serializers.fixtures.CreatArticleRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.fixtures.ArticleSlug.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new FernWebsite.NotFoundError();
                case 400:
                    throw new FernWebsite.BadRequestError();
                default:
                    throw new errors.FernWebsiteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FernWebsiteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FernWebsiteTimeoutError();
            case "unknown":
                throw new errors.FernWebsiteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const username = await core.Supplier.get(this.options.username);
        const password = await core.Supplier.get(this.options.password);
        if (username != null && password != null) {
            return core.BasicAuth.toAuthorizationHeader({
                username: username,
                password: password,
            });
        }

        return undefined;
    }
}
