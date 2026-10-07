# EKAGRA stage demo

Run `npm run demo`, then use `Shift+D` to open the presenter panel. `Reset Everything` returns to onboarding. `Load Demo History` returns to the overview; `Load DSA Session` opens goal setup; `Load Experiment Results` opens the result view. Playback runs at a deterministic 90× rate.

## 4-minute path

1. **Welcome:** “Most tools count your screen time or block apps. EKAGRA asks what happened to your attention.” Point to the two-hour sentence and select **Begin**.
2. **Goal:** select DSA Practice and explain that the student defines what counts as on-task. Select **Start Focus**.
3. **Replay:** show the local session clock and quiet observation panel. The replay reaches the end automatically; you can also end it early.
4. **Timeline:** open the alert marker at 19:12. Show “20 seconds later, off-task activity began,” then the messaging → browsing → short-video chain.
5. **Insight and experiment:** show the computed session evidence and choose **Try a small experiment**. The user opts in; EKAGRA does not enable DND.
6. **Result:** use `Shift+E` to show the illustrative before/after comparison and read the causation caveat.
7. **Trust:** open AI boundary and test the fixed validator example, then show Privacy and the closing line.

## Q&A

- **Is the data real?** No. The session log is demo data. The S07 analysis is computed from its intervals.
- **Where are the models?** Segmentation and alert linking are implemented. Additional sequence, bootstrap and multi-session methods are listed as future or illustrative in this build.
- **How is activity captured?** Device capture is future work. This demo replays a fixed log.
- **Why not block apps?** EKAGRA is designed to help a student notice their own patterns and choose a change.
- **How do you stop an LLM hallucinating?** The current explainer is a deterministic local template. Live LLM integration is not implemented here.
- **Is this surveillance?** The demo runs locally and stores its small state in browser local storage. Delete data from Privacy or reset with presenter controls.
