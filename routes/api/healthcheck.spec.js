// healthcheck.spec.js (services like Pingdom or Freshping do a similar approach to check whether your server is healthy)
describe('Healthcheck', () => {

	it('Retorno: 200 - Servidor Online', async () => {
		const res = await get(`/healthcheck`, null)
			.expect(200);
		expect(res.body.uptime).toBeGreaterThan(0);
	});

});