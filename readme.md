We cannot pass ref explicitly from a component to another.
We must re-structure the ref-receiver component with forwardRef
Now the ref-receiver have another parameter (props, ref)

We can use imperativeHook to provide the API for others component when they passing a ref

We want to place the modal on top of everything, which is make senses. So we can use createPortal and choose the place for the component