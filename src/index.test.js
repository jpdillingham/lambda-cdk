const { handler } = require('./index');

describe('handler', () => {
  it('returns 200/ok', () => {
    expect(handler({})).resolves.toEqual(
      expect.objectContaining({
        statusCode: 200,
      })
    );
  });
});
