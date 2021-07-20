import cookieMonsterFramework from '../frameworkDataObject/cookieMonsterFramework';

/** Check if Cookie Monster Mod Framework has been loaded yet and if not, does so */
export default function initModFramework() {
  if (typeof cookieMonsterFrameworkData === 'undefined') {
    Game.registerMod('cookieMonsterFramework', cookieMonsterFramework);
  }
}
