export default (items) => {
    return {
        items: items,
        years: [],
        selectedYear: null,
        dropdown: false,
        currentPage: 1,
        itemsPerPage: 10,
        availablePageSizes: [10, 20, 50], // Dropdown options


        init() {
            this.getYears();

        },

        getYears() {
            const yearSet = new Set();
            this.items.forEach(item => {
                const year = new Date(item.date).getFullYear();
                yearSet.add(year);
            });
            this.years = Array.from(yearSet);
            this.years.sort((a, b) => b - a);
            this.years.unshift(null);

            // If there are only two years (including `null`), set the selected year to the last one
            if (this.years.length === 2) {
                this.selectedYear = this.years[1];
            }
        },

        selectYear(year) {
            this.selectedYear = year;
        },

        filteredItems() {
            if (this.selectedYear === null) {
                return this.items;
            }
            return this.items.filter(item => {
                return new Date(item.date).getFullYear() === this.selectedYear;
            });
        },

        yearLabel(year) {
            return year === null ? 'All' : year;
        },

        open() {
            this.dropdown = true;
        },

        close() {
            this.dropdown = false;
        },

        toggle() {
            this.dropdown = !this.dropdown;
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },

        paginatedItems() {
            let filtered = this.filteredItems();
            let start = (this.currentPage - 1) * this.itemsPerPage;
            return filtered.slice(start, start + this.itemsPerPage);
        },

        totalPages() {
            return Math.ceil(this.filteredItems().length / this.itemsPerPage);
        },

        nextPage() {
            if (this.currentPage < this.totalPages()) {
                this.currentPage++;
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        updateItemsPerPage(event) {
            this.itemsPerPage = parseInt(event.target.value);
            this.currentPage = 1; // Reset to first page when changing pagination size
        },
    };
};
