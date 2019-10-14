module.exports = {
   
    configureWebpack: {
        devtool: 'source-map'
    },
    pages: {
        index: {
            // entry for the page
            entry: 'src/user/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',


            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        admin: {
            
            // entry for the page
            entry: 'src/admin/main.js',
            // the source template
            template: 'public/admin.html',
            // output as dist/admin.html
            filename: 'admin.html',
           base: "/admin"
        }
    }

}