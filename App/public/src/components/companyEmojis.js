// Central emoji mapping for companies used across cards and descriptions.
export const companyEmojiMap = {
  'Aster Labs': '🧪',
  'BluePeak': '🎨',
  'Cortex Analytics': '📊',
  'DeltaWorks': '💻',
  'Evergreen Media': '📰',
  'Flux Infrastructure': '⚙️',
  'Greenfield Apps': '📱',
  'Halo Systems': '🛟',
  'Ionix QA': '✅',
  'Kite Insights': '🧠',
  'LambdaWorks': '🔁',
  'Nova HR': '🧬',
  'Orbit Docs': '📄',
  'Pioneer Data': '🗄️',
  'Quanta Labs': '🔍'
};

export function getCompanyEmoji(name) {
  return companyEmojiMap[name] || '🏢';
}
