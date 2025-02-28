export default (items) => {
    return {
        items: items,
        terms: [],
        years: [],
        selectedYear: null,
        selectedTerm: null,
        searchTerm: '',
        startDate: '',
        endDate: '',
        dropdown: false,
        refineSearch: false,

        init() {
            // this.getYears();
            this.getTerms();
        },

        getTerms() {
            const termSet = new Set();
            this.items.forEach(item => {
                if (item.terms) {
                    // Split terms by '|' and add each to the set
                    const splitTerms = item.terms.split('|').map(t => t.trim());
                    splitTerms.forEach(term => termSet.add(term));
                }
            });

            this.terms = Array.from(termSet).sort();
            this.terms.unshift(null);
        },

        // getTerms() {
        //     const termSet = new Set();
        //     terms.forEach(term=> {
        //         termSet.add(term.title);
        //     });
        //     this.terms = Array.from(termSet);
        //     this.terms.sort();
        //     this.terms.unshift(null);
        // },

        getYears() {
            const yearSet = new Set();
            this.items.forEach(item => {
                const year = new Date(item.date).getFullYear();
                yearSet.add(year);
            });
            this.years = Array.from(yearSet);
            this.years.sort((a, b) => b - a);
            this.years.unshift(null);
        },

        selectYear(year) {
            this.selectedYear = year;
        },

        selectTerm(term) {
            this.selectedTerm = term;
            this.searchTerm = '';
        },

        filteredItems() {
            let filteredItems = this.items;

            if (this.selectedTerm !== null) {
                filteredItems = filteredItems.filter(item => {
                    return item.terms.split('|').map(t => t.trim()).includes(this.selectedTerm);
                });
            }

            if (this.searchTerm.trim() !== '') {
                filteredItems = filteredItems.filter(item => {
                    return item.title.toLowerCase().includes(this.searchTerm.toLowerCase());
                });
            }

            if (this.startDate !== '' && this.endDate !== '') {
                filteredItems = filteredItems.filter(item => {
                    const itemDate = new Date(item.date);
                    const startDate = new Date(this.startDate);
                    const endDate = new Date(this.endDate);
                    return itemDate >= startDate && itemDate <= endDate;
                });
            }

            return filteredItems.sort((a, b) => new Date(b.date) - new Date(a.date));
        },

        resetFilters() {
          this.searchTerm = '';
          this.startDate = '';
          this.endDate = '';
        },
        termLabel(term) {
            return term === null ? 'All' : term;
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

        toggleSearch() {
            this.refineSearch = !this.refineSearch;
        },


        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
    };
};
