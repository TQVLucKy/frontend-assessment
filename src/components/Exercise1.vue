<style lang="scss" scoped src="../styles/exercise1.scss"></style>

<template>
    <div>
        <div class="relative">
            <img class="hidden md:block" src="https://placehold.co/1920x650" />
            <img class="block md:hidden w-full" src="https://placehold.co/600x600" />
            <div class="absolute inset-0 bg-black/30 z-10"></div>
            <div
                class="w-[95%] md:w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
                <div class="text-5xl md:text-[64px] font-bold leading-[1.5] tracking-wider">Hello
                    Developer!</div>
                <div class="text-[24px] md:text-[32px]   tracking-[0.09em]">Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit
                </div>
            </div>
        </div>
        <div
            class="flex items-center md:items-stretch flex-col md:flex-row md:justify-center gap-10 py-[40px] px-[25px] md:px-6">
            <div class="card">
                <div>
                    <img class="card__image" src="https://placehold.co/400x300" />
                </div>
                <div class="card__content">
                    <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div class="card__button">READ MORE</div>
                </div>
            </div>
            <div class="card">
                <div>
                    <img class="card__image" src="https://placehold.co/400x300" />
                </div>
                <div class="card__content">
                    <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua..</div>
                    <div class="card__button">READ MORE</div>
                </div>
            </div>
            <div class="card">
                <div>
                    <img class="card__image" src="https://placehold.co/400x300" />

                </div>
                <div class="card__content">
                    <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</div>
                    <div class="card__button">READ MORE</div>
                </div>
            </div>
        </div>
    </div>
</template>