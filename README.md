# react-native-prototypes

![student list](proto1.anim.gif)

## Navigation
This uses [react-native-router-flux](https://github.com/aksonov/react-native-router-flux), a router library that plays nice with redux and uses the React Native Nagivator component.

## Roadmap
- [ ] Network requests - these will occur within action creators, as per redux convention, and live in their own directory. This will allow us to remove or swap out the network layer without changing anything on the component layer.
- [ ] Login views and auth - authenticate via FAS, get real user data to start working with
