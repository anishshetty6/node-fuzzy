function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[a.length][b.length];
}

function similarityRatio(a, b) {
    const distance = levenshteinDistance(a, b);
    const maxLen = Math.max(a.length, b.length);
    return ((maxLen - distance) / maxLen) * 100;
}


function findBestMatch(target, candidates) {
    const scores = candidates.map((candidate) => ({
        candidate,
        score: similarityRatio(target, candidate),
    }));
    scores.sort((a, b) => b.score - a.score);
    return scores[0];
}

module.exports = { similarityRatio, findBestMatch };
