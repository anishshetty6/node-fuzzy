
# Fuzzy Ripoff

A lightweight JavaScript library for fuzzy string matching, helping you find the closest match or calculate similarity scores between strings. Perfect for search engines, autocomplete, and text matching tasks.



## Features

- Calculates similarity ratio between two strings.
- Finds the closest match from a list of candidates.
- Optimized for speed and memory efficiency.


## Installation

Install my-project with npm

```bash
  npm install fuzzy-ripoff
```
    
## Usage

Import the library:

```bash
 const { similarityRatio, findBestMatch } = require('fuzzy-ripoff');

```
Calculate Similarity Ratio:

```bash
 const ratio = similarityRatio('hello', 'hallo');
 console.log(ratio); // Output: 80 (percentage similarity)
```
Find the Closest Match:
```bash
const target = 'fuzzy';
const candidates = ['buzzy', 'fuzzy logic', 'fizz', 'fuz'];
const bestMatch = findBestMatch(target, candidates);

console.log(bestMatch);
// Output: { candidate: 'fuzzy logic', score: 83.33 }

```




## API Reference

#### Similarity Ratio

```
  similarityRatio(a, b)
```
- Description: Calculates the similarity ratio (in percentage) between two strings.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|      `a ` | `string` | First string to compare. |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|      `b ` | `string` | Second string to compare. |

- Returns: A number (percentage similarity).

#### Find Best Match

```
  findBestMatch(target, candidates)
```
- Description: Finds the closest match to a target string from a list of candidates.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `target ` | `string` | The string to match. |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `candidates` | `arry of strings` | List of candidate strings. |

#### Returns: An object containing:
- candidate (string): The closest matching string.
- score (number): The similarity score of the best match.



## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

