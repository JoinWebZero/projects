# Projects

This initiative started with the submissions for the Blockspace Symmetry Hackathon (Aug. 19-12, 2024, Funkhaus, Berlin), whereby 8 submissions were selected to be the ones to receive cash prizes.
The prizes were given in two milestones: 60% given upfront and 40% to be distributed upon the completion of a second milestone.

The repository serves the purpose of confirming the receipt of submitted milestone and to have a central place for all submissions continued to be worked on post-hackathon.

# Submitting a milestone

1. Fork this repo.
2. Find your project in the list of submissions (e.g. in "funkhaus-2024.json") and add a short description for the milestones completed.
3. Make a PR to this repo with your changes.
4. Repo maintainers will review your PR and send you the cash prize for the milestone upon approval.


Example:

```json
    {
      "eventStartedAt": "funkhaus-2024",
      "projectName": "Airdrops for Everyone on Polkadot",
      "teamLead": "Daniel Vaculík",
      "description": "Airdrops at the moment are very expensive. We aim to make them cheaper by utilising merkle trees/root and merkle proofs. It makes the airdrops multiple times cheaper. This project is a follow-up on an existing pull request to Polkadot SDK.",
      "githubRepo": "https://github.com/RostislavLitovkin/AirdropsForEveryone",
      "demoUrl": "nan",
      "slidesUrl": "nan",
      "techStack": "Rust, wasm, typescript, react",
+     "milestones": {
+       "1": "Submitted proof of concept at hackathon",
+       "2": "Changes to asset pallet are merged into PolkadotSDK"
      }
    },
```
