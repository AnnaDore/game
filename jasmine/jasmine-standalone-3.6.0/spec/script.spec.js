 describe('The function strangerNameLength', () => {
    it('should check that input !== null', () => {
      expect(typeof strangerNameLength).toBe('function');
  });
  it('should return a number', () => {
    expect(typeof strangerNameLength(inputName.value.length)).toBe('number')
  }); 

}); 

describe('The function greetAfterKeypress', () => {
  it('Defines greetAfterKeypress', () => {
    expect(typeof greetAfterKeypress).toBe('function');
  });
  it('should except event parameter', () => {
    expect(event.keyCode).toEqual(13)
  })
})

describe('The function greetAfterClick', () => {
  it('Defines greetAfterClick', () => {
    expect(typeof greetAfterClick).toBe('function');
  });

})

describe('The function addPAndStartButton', () => {
  it('Defines addPAndStartButton', () => {
    expect(typeof addPAndStartButton).toBe('function');
  });
})
