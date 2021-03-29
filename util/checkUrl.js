export const checkUrl = (query, results, res) => {
    if (!query) {
        res.status(400).send({ message: 'query param is required' });
    } else if (results.title) {
        res.status(200).send(results);
    } else if (results.email) {
        res.status(200).send(results);
    } else if (!results.length) {
        res.sendStatus(404);
    } else {
        res.status(200).send(results);
    }
};