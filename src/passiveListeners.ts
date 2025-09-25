// Script injecté pour marquer certains listeners comme passifs et réduire les warnings Chrome.
// Limitation: on ne peut pas rétroactivement changer les options d'un listener déjà ajouté sans le retirer.
// On monkey-patche addEventListener pour forcer passive:true sur wheel, touchstart, touchmove si non explicitement défini.

(function () {
	if (typeof window === 'undefined') return;
	const orig = EventTarget.prototype.addEventListener;
	const passiveEvents = ['wheel', 'touchstart', 'touchmove'];
	EventTarget.prototype.addEventListener = function (type: string, listener: any, options?: any) {
		try {
			if (passiveEvents.includes(type)) {
				if (options === undefined) {
					options = { passive: true };
				} else if (typeof options === 'boolean') {
					options = { capture: options, passive: true };
				} else if (typeof options === 'object' && options.passive === undefined) {
					options = { ...options, passive: true };
				}
			}
		} catch (_) {
			// silencieux
		}
		return orig.call(this, type, listener, options);
	};
})();
