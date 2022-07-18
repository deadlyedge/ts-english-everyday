import keyword_extractor from 'keyword-extractor'

export function getSummary(ask: string): string {
  const extraction_result =
    keyword_extractor.extract(ask, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true
    })
  const summary = extraction_result[3] || 'beautiful'
  return summary
}