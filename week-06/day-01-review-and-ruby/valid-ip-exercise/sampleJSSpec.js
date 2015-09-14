describe ("hasValidIP", function() {

    it ("returns true for 4-6 places", function() {
	expect(hasValidIP("0.0.0.0")).toBe(true);
	expect(hasValidIP("0.0.0.0.0.0")).toBe(true);
    });

    it ("returns false if greater or less than 4-6 places", function() {
	expect(hasValidIP("0.0.0")).toBe(false);
	expect(hasValidIP("0.0.0.0.0.0.0")).toBe(false);
    });

    it ("contains no numbers greater than 255", function() {
	expect(hasValidIP("255.155.0.155.255")).toBe(true);
	expect(hasValidIP("255.155.0.155.256")).toBe(false);
    });

});
