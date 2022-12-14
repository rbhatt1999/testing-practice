const {stringLength, reverseString, calculator, capitalize} = require('./index');
const x = new calculator();
test('string length function', ()=>{
  expect(stringLength('hello')).toBe(5);
})

test('Checks whether string length is between 1 and 10', () => {
	expect(() => stringLength('Botlhale Setou')).toThrow();
});

test ('revese string test 1',()=>{
  expect(reverseString('hello')).toBe('olleh')
});

test ('revese string test 2',()=>{
  expect(reverseString('Rohit')).toBe('tihoR')
});

describe('add check', () => {
	test('add check 1', () => {
		expect(x.add(5, 5)).toBe(10);
	});
  test('add check 2', () => {
		expect(x.add(5, 0)).toBe(5);
	});
  test('add check 3', () => {
		expect(x.add(5, -5)).toBe(0);
	});
});

describe('subtract check', () => {
  test('Subtract Check 1', () => {
    expect(x.subtract(5, 5)).toBe(0);
  });
  test('Subtract Check 2', () => {
    expect(x.subtract(5, 4)).toBe(1);
  });
  test('Subtract Check 3', () => {
    expect(x.subtract(15, 2)).toBe(13);
  });
});

describe('check multiply', () => {
  test('check multiply 1', () => {
    expect(x.multiply(5, 5)).toBe(25);
  });
  test('check multiply 2', () => {
    expect(x.multiply(4, 4)).toBe(16);
  });
  test('check multiply 3', () => {
    expect(x.multiply(6, 5)).toBe(30);
  });
});

describe('check divide', () => {
  test('Check divide 1', () => {
    expect(x.divide(5, 5)).toBe(1);
  });
  test('Check divide 1', () => {
    expect(x.divide(60, 6)).toBe(10);
  });
  test('Check divide 3', () => {
    expect(x.divide(10, 2)).toBe(5);
  });
});

test('capitalize', ()=>{
  expect(capitalize('hello')).toBe('Hello');
})





