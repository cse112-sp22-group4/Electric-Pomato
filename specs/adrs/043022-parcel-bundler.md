# April 30th 2022, Parcel ADR

Resources to get started:
- [What is Code Minification](https://www.imperva.com/learn/performance/minification/#:~:text=Minification%20is%20the%20process%20of,into%20a%20better%20user%20experience.)
- [Getting started - Parcel](https://parceljs.org/getting-started/webapp/)

## Status: accepted

## Deciders: Mark, Liam, Alan

## Context and Problem Statement

In order to help improve the overall performance of our app loading times and cut down the number of network requests, a bundler is needed. 

## Things to consider

1. Which package should we go with for applying minification? I.e. webpack, parcel, rollup , browserify
2. The package we go with for code minification should also have the capabilities out the box to compile our scss into css.

## Decision Outcome

1. Which package should we go with for applying minification? I.e. webpack, browserify, parcel
    - While webpack is one of the most widely used bundlers, it can take some time to setup properly due to the large number of configuration options available. While this is very useful for larger applications, it may be overkill for an app like ours. For this reason, webpack is ruled out.
    - Browserify off the bat doesn't appear to have very detailed documentation / instructions when compared to webpack or parcel. Browserify doesn't come with scss to css compilation out the box, and instead requires a separate third party middleware service. Lastly, Browserify is more commonly used for compiling Node.js - style modules for use in the browser. This certainly does not fix our use case
    - Parcel has excellent documentation which is on par with webpack. A main benefit over webpack is that is essentially "zero configuration", and by simply installing parcel through npm, and adding some scripts, I was able to get it up and working relatively quickly. It also provides compilation for our scss to css. 
2. The package we go with for code minification should also have the capabilities out the box to compile our scss into css.
    - As stated previously, Parcel allows for scss to css compilation out of the box, which will also simplify our process for development work. 
