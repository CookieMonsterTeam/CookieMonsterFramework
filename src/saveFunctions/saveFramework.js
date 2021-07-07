/**
 *
 */
export default function saveFramework(listingHTML) {
  const listingDiv = document.createElement('div');
  listingDiv.className = 'listing';
  listingDiv.innerHTML = listingHTML;
  return listingDiv;
}
