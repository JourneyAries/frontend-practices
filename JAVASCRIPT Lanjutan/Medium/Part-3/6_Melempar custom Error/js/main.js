try {
  throw new Error('This is a custom error');
} catch (error) {
  console.error('Custom Error: ', error.message);
}