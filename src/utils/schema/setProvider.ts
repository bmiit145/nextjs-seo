import type { Provider } from '../../types';

export function setProvider(provider: Provider) {
  if (provider) {
    return {
      '@type': provider.type || 'Organization',
      name: provider.name,
      sameAs: provider.url,
    };
  }

  return undefined;
}
