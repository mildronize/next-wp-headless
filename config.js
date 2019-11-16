const apiUrl = 'https://host.mildronize.com/?rest_route=';

const WPAPI = {    
    // allPosts: 'https://host.mildronize.com/wp-json/wp/v2/posts',     
    // My API plugin
    allPostsBySlug: `${apiUrl}/api/v1/posts`, 
    allPagesBySlug: `${apiUrl}/api/v1/pages`,
    previewById: `${apiUrl}/api/v1/preview/`,
    // Default API
    allPagesById: `${apiUrl}/wp/v2/pages`,
    allPostsById: `${apiUrl}/wp/v2/posts`,
}

const Config = {
    WPAPI,
    apiUrl,
    per_page: 100,
    timezone: 'Asia/Bangkok'
}
export default Config