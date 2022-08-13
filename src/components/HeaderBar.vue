<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">Autokulu</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li>
					<routerLink to="/" class="nav-link" href="#" role="menuitem" aria-selected="false">DashBoard
					</routerLink>
				</li>
				<li>
					<routerLink to="/autot" class="nav-link" href="#" role="menuitem" aria-selected="false">Autot
					</routerLink>
				</li>
				<li>
					<routerLink to="/tankkaukset" class="nav-link" href="#" role="menuitem" aria-selected="false">
						Tankkaukset</routerLink>
				</li>
				<li>
					<routerLink to="/huollot" class="nav-link" href="#" role="menuitem" aria-selected="false">Huollot
					</routerLink>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>
<script>
export default {
	name: "HeaderBar",
	methods: {
		logOut() {
			localStorage.clear();
			this.$router.push({ name: "LogIn" });
		},
	},
};
</script>
