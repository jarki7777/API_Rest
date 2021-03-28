const checkUrl = (query, results, res) => {
    if (!query) {
        res.status(400).send({ message: 'query param is required' });
    } else if (!results.length) {
        res.sendStatus(404);
    } else {
        res.status(200).send(results);
    }
}

export default checkUrl;