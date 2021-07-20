/**
 * Returns a subsection for the mod to add listings/info to
 * @param   {string}  listingHTML   The innerHTML of the listing
 * @returns {object}  listingDiv    Div of the subseciont
 */
export default function createInfoListing(listingHTML) {
  const listingDiv = document.createElement('div');
  listingDiv.className = 'listing';
  listingDiv.innerHTML = listingHTML;
  return listingDiv;
}
