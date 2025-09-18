export function parseGithubUrl(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname !== 'github.com') {
            return null;
        }
        const pathParts = parsedUrl.pathname.split('/').filter(part => part.length > 0);
        if (pathParts.length < 2) {
            return null;
        }
        const owner = pathParts[0];
        const repoName = pathParts[1].replace(/\.git$/, '');
        return { owner, repoName };
    } catch (e) {
        return null;
    }
}
