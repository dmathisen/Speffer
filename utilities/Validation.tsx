import Utils from "./Utils";

const Validation = {
	isAddCategoryValid(searchCategories: string[], category: string): boolean {
		if (category.trim().length === 0) {
			return false;
		}
		if (Utils.categoryExists(searchCategories, category)) {
			alert('Category already exists.');
			return false;
		}
		return true;
	},

	isRemoveCategoryValid(searchCategories: string[], category: string): boolean {
		if (category.trim().length === 0) {
			return false;
		}
		if (!Utils.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		return true;
	},

	isAddSiteValid(searchCategories: string[], category: string, searchSettings: any, site: string): boolean {
		if (site.trim().length === 0) {
			return false;
		}
		if (!Utils.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		if (Utils.siteExists(searchSettings, category, site)) {
			alert('Site already exists.');
			return false;
		}
		if (!Validation.urlIsValid(site)) {
			alert('The URL looks invalid.');
			return false;
		}
		return true;
	},

	isRemoveSiteValid(searchCategories: string[], category: string, searchSettings: any, site: string): boolean {
		if (category.trim().length === 0 || site.trim().length === 0) {
			return false;
		}
		if (!Utils.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		if (!Utils.siteExists(searchSettings, category, site)) {
			alert('Something went wrong. Site does not exist.');
			return false;
		}
		return true;
	},

	urlIsValid(site: string): boolean {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return !!pattern.test(site);
  }
}

export default Validation;