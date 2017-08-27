
export default class ContextualBinding {
  constructor (container, concrete) {
    this.needs = null
    this.concrete = concrete
    this.container = container
  }

  needs (abstract) {
    this.needs = abstract

    return this
  }

  give (implementation) {
    this.container.addContextualBinding(
      this.concrete, this.needs, implementation
    )
  }
}
