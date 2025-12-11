export default ({ env }) => ({
    'preview-button': {
        config: {
            contentTypes: [
                {
                    uid: 'api::hero.hero',
                    draft: {
                        url: 'http://localhost:3001/api/preview',
                        query: {
                            type: 'hero',
                            secret: env('STRAPI_PREVIEW_SECRET', 'my-secret-token'),
                        },
                    },
                    published: {
                        url: 'http://localhost:3001',
                    },
                },
                {
                    uid: 'api::enrollment.enrollment',
                    draft: {
                        url: 'http://localhost:3001/api/preview/{id}',
                        query: {
                            type: 'enrollment',
                            secret: env('STRAPI_PREVIEW_SECRET', 'my-secret-token'),
                        },
                    },
                    published: {
                        url: 'http://localhost:3001/enrollment/{id}',
                    },
                },
            ],
        },
    },
});

