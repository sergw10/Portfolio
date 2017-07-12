var d = document,
	w = "#fff",
	g = "#f6f7fa",
	but = d.getElementsByName("but");

	for (let i = 0; i < but.length; i++) {
		but[i].addEventListener("mousemove", Big);
		but[i].addEventListener("mouseout", Small);
	}

	function Big () {
		this.style.backgroundColor = w;
		this.style.transform = "scale(" + 1.05 + ")";
	};

	function Small () {
		this.style.backgroundColor = g;
		this.style.transform = "scale(" + 1 + ")";
	};