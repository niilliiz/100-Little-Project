export function GenerateElement(
  elementProperty = "div",
  classListProperty = [],
  content = null,
  children = [],
  attributes = []
) {
  // create element itself
  const element = createElement(elementProperty);

  // add class
  const elementWithClass = AddClassToElement(element, classListProperty);

  // add content inside the element if there is one
  const elementWithContentAdded = AddContentToElement(
    elementWithClass,
    content
  );

  // add child the element if there is one
  const elementWithChildrenAdded = AppendChildrenToElement(
    elementWithContentAdded,
    children
  );

  // add attribute to the element if there is one
  const elementWithAttributeAdded = AddAttributeToElement(
    elementWithChildrenAdded,
    attributes
  );

  return elementWithAttributeAdded;
}

export function createElement(element) {
  return document.createElement(element);
}

export function AddClassToElement(element, lists) {
  if (lists.length > 0) {
    lists.forEach((className) => element.classList.add(className));
  }
  return element;
}

export function AddContentToElement(element, content) {
  if (content) {
    element.textContent = content;
  }
  return element;
}

export function AppendChildrenToElement(element, children) {
  if (children.length > 0) {
    children.forEach((child) => element.append(child));
  }
  return element;
}

export function AddAttributeToElement(element, attributes) {
  if (attributes.length > 0) {
    attributes.forEach((attribute) =>
      element.setAttribute(attribute.attr, attribute.value)
    );
  }
  return element;
}
