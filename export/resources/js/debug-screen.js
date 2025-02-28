const debugScreen = () => {
    const debug = document.getElementsByClassName("debug-screens").length;

    if (debug) {


        document.addEventListener("DOMContentLoaded", () => {
            // Create the debug div
            const debugScreen = document.createElement("div");
            debugScreen.id = "debug-screen";
            debugScreen.className =
                "fixed z-20 bottom-0 left-0 p-2 text-white bg-black rounded-tr-2xl  mx-auto";
            document.body.appendChild(debugScreen);

            // Function to convert rem to pixels
            function remToPx(rem) {
                return parseFloat(rem) * 16;
                // return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
            }

            function getBreakpointValues() {
                const styles = getComputedStyle(document.documentElement);

                return {
                    'phone': remToPx(styles.getPropertyValue("--breakpoint-phone")),
                    sm: remToPx(styles.getPropertyValue("--breakpoint-sm")),
                    "tablet": remToPx(styles.getPropertyValue("--breakpoint-tablet")),
                    md: remToPx(styles.getPropertyValue("--breakpoint-md")),
                    lg: remToPx(styles.getPropertyValue("--breakpoint-lg")),
                    "laptop": remToPx(styles.getPropertyValue("--breakpoint-laptop")),
                    xl: remToPx(styles.getPropertyValue("--breakpoint-xl")),
                    "desktop": remToPx(styles.getPropertyValue("--breakpoint-desktop")),
                    "2xl": remToPx(styles.getPropertyValue("--breakpoint-2xl")),
                    "3xl": remToPx(styles.getPropertyValue("--breakpoint-3xl")),
                    "4k": remToPx(styles.getPropertyValue("--breakpoint-4k")),
                };
            }


            function updateBreakpoint() {
                const width = window.innerWidth;
                const breakpoints = getBreakpointValues();

                let breakpoint = "_"; // Default for < sm

                if (width >= breakpoints["4k"]) breakpoint = "4k";
                else if (width >= breakpoints["3xl"]) breakpoint = "3xl";
                else if (width >= breakpoints["2xl"]) breakpoint = "2xl";
                // else if (width >= breakpoints["desktop"]) breakpoint = "desktop";
                else if (width >= breakpoints["xl"]) breakpoint = "xl/desktop";
                // else if (width >= breakpoints["laptop"]) breakpoint = "laptop";
                else if (width >= breakpoints["lg"]) breakpoint = "lg/laptop";
                else if (width >= breakpoints["md"]) breakpoint = "md";
                else if (width >= breakpoints["sm"]) breakpoint = "sm/tablet";
                else if (width >= breakpoints["phone"]) breakpoint = "phone";
                // else if (width >= breakpoints["tablet"]) breakpoint = "tablet";

                debugScreen.textContent = breakpoint;
            }

            // Update on load and resize
            updateBreakpoint();
            window.addEventListener("resize", updateBreakpoint);

        });
    }

}

export default debugScreen;
