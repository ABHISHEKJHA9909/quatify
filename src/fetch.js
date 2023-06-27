async function fetchQuote() {

    let x = await fetch("https://api.seriesquotes.10cyrilc.me/quote/")
        .then((e) => e.json())
        .then((e) => {
            return ([e[0].author, e[0].quote]);
        })
        .catch((e) => false);

    //fetch fails
    if (x == false) {
        return false;
    }
    return [x[0] == "" ? "" : `—  ${x[0]}`, x[1]];
}

async function fetchAvatar() {
    let x = await fetch("https://randomuser.me/api/")
        .then((e) => e.json())
        .then((e) => e)
        .catch((e) => false)

    //fetch fails
    if (x == false)
        return ["Bot", "data:image/jpeg;base64,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"]

    let name = x.results[0].name.first + " " + x.results[0].name.last;
    let image = x.results[0].picture.thumbnail;

    return [name, image];
}

export { fetchAvatar, fetchQuote };