<script>
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let mobileMenuToggle = false;

	function toggleMenu() {
		mobileMenuToggle = !mobileMenuToggle;
	}
</script>

<div class="md:w-[1440px] md:mx-auto container">
	<!-- header-->
	<div
		class="bg-[url('/images/mobile/image-header.jpg')] 
    lg:bg-[url('/images/desktop/image-header.jpg')] 
    bg-cover px-6 pt-6 h-[535px] lg:h-[800px] bg-center bg-no-repeat w-full"
	>
		<!-- nav -->
		<div class="flex justify-between">
			<div class="branding">
				<h1 class="text-white font-extrabold tracking-wide font-sans text-2xl md:text-4xl">
					sunnyside
				</h1>
			</div>
			<div class="lg:hidden" on:click={toggleMenu}>
				<img src="images/icon-hamburger.svg" alt="mobile-menu-toggle" />
			</div>
			<div class="menu hidden lg:block">
				<ul class="flex flex-col lg:flex-row gap-10 text-white items-center font-sans text-lg">
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
					<li class="bg-white py-3 px-6 rounded-3xl text-darkblue uppercase">Contact</li>
				</ul>
			</div>
		</div>
		{#if mobileMenuToggle}
			<!-- mobile menu -->
			<div
				class="flex flex-col"
				transition:fly={{
					delay: 250,
					duration: 300,
					x: 400,
					y: 0,
					opacity: 0.5,
					easing: quintOut
				}}
			>
				<div class="md:hidden self-end rotate-180">
					<svg height="16" width="16">
						<polygon points="16,0 0,16 0,0" style="fill:white;" />
					</svg>
				</div>
				<div class="md:hidden block menu bg-white">
					<ul class="flex flex-col gap-10 py-10 items-center font-sans text-lg text-greyblue">
						<li>About</li>
						<li>Services</li>
						<li>Projects</li>
						<li class="bg-yellow py-3 px-6 rounded-3xl text-darkblue uppercase">Contact</li>
					</ul>
				</div>
			</div>
		{:else}
			<!-- headline -->
			<div class="flex items-center gap-24 flex-col">
				<div
					class="md:text-5xl text-4xl text-center pt-16 leading-relaxed font-serif uppercase text-white tracking-extrawide font-extrabold"
				>
					We are creatives
				</div>
				<img src="/images/icon-arrow-down.svg" alt="arrow" />
			</div>
		{/if}
	</div>
	<!-- 4x4 grid -->
	<div class="grid md:grid-cols-2 grid-cols-1">
		<div class="p-10 lg:p-16 lg:text-left flex flex-col justify-center text-center">
			<h2 class="text-3xl lg:text-4xl font-extrabold font-serif text-darkblue pb-6">
				Transform your brand
			</h2>
			<p class="lg:text-lg text-verygreyblue font-sans lg:pb-12 pb-6">
				We are a full-service creative agency specializing in helping brands grow fast. Engage your
				cleints through compelling visuals that do most of the marketing for you.
			</p>
			<a href="#" class="uppercase md:text-xl font-serif">Learn More</a>
		</div>
		<div class="image h-full w-auto order-first md:order-none">
			<img class="hidden md:block" src="images/desktop/image-transform.jpg" alt="transform" />
			<img class="block md:hidden" src="images/mobile/image-transform.jpg" alt="transform" />
		</div>
		<div class="image h-full">
			<img class="hidden md:block" src="images/desktop/image-stand-out.jpg" alt="stand-out" />
			<img
				class="block md:hidden md:h-full"
				src="images/mobile/image-stand-out.jpg"
				alt="stand-out"
			/>
		</div>
		<div class="p-10 lg:p-16 flex flex-col justify-center text-center">
			<h2 class="text-3xl lg:text-4xl font-extrabold font-serif text-darkblue pb-6">
				Stand out to the right audience
			</h2>
			<p class="lg:text-lg text-verygreyblue font-sans lg:pb-12 pb-6">
				Using a collaborative formula of designers, researchers, photographers, videographers, and
				copywriters, we'll build and extend your brand in digital places.
			</p>
			<a href="#" class="uppercase md:text-xl font-serif">Learn More</a>
		</div>
		<div
			class="md:p-16 p-8 pt-[30rem] bg-[url('/images/desktop/image-graphic-design.jpg')] bg-cover bg-center flex flex-col justify-end"
		>
			<h2 class="text-center text-decyan text-4xl font-serif ">Graphic Design</h2>
			<p class="text-decyan text-center text-lg font-sans ">
				Great design makes you memorable. We deliver artwork that underscores your brand message and
				captures potential clients' attention.
			</p>
		</div>
		<div
			class="md:p-16 p-8 md:pt-[30rem] pt-[30rem] bg-[url('/images/desktop/image-photography.jpg')] bg-cover bg-center flex flex-col justify-end"
		>
			<h2 class="text-center text-decyan text-4xl font-serif ">Photography</h2>
			<p class="text-decyan text-center text-lg font-sans ">
				Increase your credibility by getting the most stunning, high-quality photos that improve
				your business image.
			</p>
		</div>
	</div>
	<!-- testimonals -->
	<div class="lg:p-24 p-12">
		<h2 class="text-center font-serif uppercase tracking-extrawide text-greyblue text-2xl py-12">
			Client Testimonials
		</h2>
		<div class="flex flex-col lg:flex-row md:gap-12 gap-4">
			<div class="flex flex-col items-center">
				<img
					src="/images/image-emily.jpg"
					alt="testimonal-emily"
					class="rounded-full scale-50 md:mb-6"
				/>
				<p class="text-lg text-center text-verygreyblue md:mb-16 mb-8">
					We put our trust in Sunnyside and they delivered, making sure our needs were met and
					deadlines were always hit.
				</p>
				<span class="text-xl font-serif text-deblue">Emily R.</span>
				<span class="text-md font-sans text-greyblue">Marketing Director</span>
			</div>
			<div class="flex flex-col items-center">
				<img
					src="/images/image-thomas.jpg"
					alt="testimonal-thomas"
					class="rounded-full scale-50 md:mb-6"
				/>
				<p class="text-lg text-center text-verygreyblue md:mb-16 mb-8">
					We put our trust in Sunnyside and they delivered, making sure our needs were met and
					deadlines were always hit.
				</p>
				<span class="text-xl font-serif text-deblue">Thomas S.</span>
				<span class="text-md font-sans text-greyblue">Chief Operating Officer</span>
			</div>
			<div class="flex flex-col items-center">
				<img
					src="/images/image-jennie.jpg"
					alt="testimonal-jennie"
					class="rounded-full scale-50 md:mb-6"
				/>
				<p class="text-lg text-center text-verygreyblue md:mb-16 mb-8">
					We put our trust in Sunnyside and they delivered, making sure our needs were met and
					deadlines were always hit.
				</p>
				<span class="text-xl font-serif text-deblue">Jennie F.</span>
				<span class="text-md font-sans text-greyblue">Business Owner</span>
			</div>
		</div>
	</div>
	<!-- gallery -->
	<div class="grid grid-cols-2">
		<img
			class="hidden md:block"
			src="/images/desktop/image-gallery-milkbottles.jpg"
			alt="gallery-milkbottles"
		/>
		<img
			class="hidden md:block"
			src="/images/desktop/image-gallery-orange.jpg"
			alt="gallery-orange"
		/>
		<img class="hidden md:block" src="/images/desktop/image-gallery-cone.jpg" alt="gallery-cone" />
		<img
			class="hidden md:block"
			src="/images/desktop/image-gallery-sugarcubes.jpg"
			alt="gallery-sugarcubes"
		/>

		<img
			class="md:hidden block"
			src="/images/mobile/image-gallery-milkbottles.jpg"
			alt="gallery-milkbottles"
		/>
		<img
			class="md:hidden block"
			src="/images/mobile/image-gallery-orange.jpg"
			alt="gallery-orange"
		/>
		<img class="md:hidden block" src="/images/mobile/image-gallery-cone.jpg" alt="gallery-cone" />
		<img
			class="md:hidden block"
			src="/images/mobile/image-gallery-sugar-cubes.jpg"
			alt="gallery-sugarcubes"
		/>
	</div>
	<div class="bg-[#97D8C7] py-12">
		<h2 class="text-center text-3xl font-extrabold text-decyan pb-8">sunnyside</h2>
		<ul class="text-lg flex justify-center gap-12 text-decyan pb-20">
			<li>About</li>
			<li>Services</li>
			<li>Projects</li>
		</ul>
		<ul class="flex justify-center gap-6">
			<li><img src="images/icon-facebook.svg" alt="facebook icon" /></li>
			<li><img src="images/icon-instagram.svg" alt="facebook icon" /></li>
			<li><img src="images/icon-twitter.svg" alt="facebook icon" /></li>
			<li><img src="images/icon-pinterest.svg" alt="facebook icon" /></li>
		</ul>
	</div>
</div>
