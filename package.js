Package.describe({
    name: 'polyroid:iron-meta',
    version: '1.1.0',
    summary: 'Useful for sharing information across a DOM tree',
    git: 'https://github.com/Polyroid/iron-meta.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'hero.svg',
        'iron-meta.html'
    ], 'client');
});
