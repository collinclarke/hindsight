import React from 'react';

export const wonkType = (phrase, maxWeight) => {
  const newHtml = [];

  const weight = () => {
    const random = Math.floor(Math.random() * Math.floor(7));
    return random * 100;
  };

  phrase.split("").forEach((letter, idx) => {
    const fontWeight = weight();
    const key = idx;
    newHtml.push(
      <span key={key} style={{ fontWeight }}>{letter}</span>
    )
  })

  return newHtml;
}

export const buildWeight = (string) => {

  const newHtml = [];
  const length = string.length;
  console.log(length)
  const divisions = Math.floor(length / 7);
  const breakpoints = [];

  for (let i = 0; i < length; i += divisions) {
    breakpoints.push(i);
  }

  if (!breakpoints.includes((length - 1))) breakpoints.push(length - 1);

  const weights = [400, 500, 600, 700, 800, 900];
  let minIdx = 0;
  let maxIdx = 1;

  breakpoints.forEach((breakpoint, idx) => {
    const fontWeight = weights[idx];
    const portion = string.substring(breakpoints[minIdx], breakpoints[maxIdx]);
    console.log(portion, [minIdx, maxIdx])
    newHtml.push(
      <span key={idx} style={{fontWeight}}>{portion}</span>
    )
    minIdx += 1;
    maxIdx += 1;
  })

  return newHtml;

}

export const buildWordWeights = (string) => {
  const newHtml = []
  string.split(" ").forEach(word => {
    newHtml.push(buildWeight(word));
  })
  return newHtml;
}
