export default function stringToSlug (title) {
    return (title.toLowerCase().replace(/\s/g, "-").replace("ê","e").replace("â","a"));
}