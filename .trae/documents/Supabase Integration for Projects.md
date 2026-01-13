# Plan to Fix Tags and Schema

Based on your screenshot, the `tags` column in your Supabase database is a **Text** string (e.g., "Python,AI") instead of an Array. This causes the `tags.map` error because the code expects an array.

I will fix the code to handle these text strings and provide the correct SQL for your database structure.

## Proposed Changes

1.  **Update `components/ProjectCard.tsx`**:
    *   Change the `tags` prop to accept either a `string[]` or a `string`.
    *   Add logic to split the string by commas: `tags.split(',')` so it can be mapped correctly.

2.  **Update `app/projects/page.tsx`**:
    *   **Fix Schema Error**: Remove `.schema("portfolio")` to use the default public schema.
    *   **Update Categories**: Set categories to `["All", "CAT_1", "CAT_2", "CAT3"]`.

3.  **Update `supabase_schema.sql`**:
    *   Generate `INSERT` statements using **comma-separated strings** for tags (e.g., `'Python,AI'`) instead of arrays.

## SQL to be Generated

```sql
-- Insert sample data (Tags as comma-separated strings)
INSERT INTO portfolio.projects (title, description, category, tags, link, featured)
VALUES
    ('AI Assistant', 'Smart AI agent...', 'CAT_1', 'Python,AI', '#', true),
    ('Sales Dashboard', 'Real-time analytics...', 'CAT_2', 'Data,React', '#', true),
    ('Prediction Model', 'Future trends...', 'CAT3', 'ML,TensorFlow', '#', true),
    ('Chatbot', 'Customer service...', 'CAT_1', 'NLP,GPT', '#', false),
    ('Market Analysis', 'Global trends...', 'CAT_2', 'SQL,BigQuery', '#', false);
```

## Verification
*   The "Projects" page will load successfully.
*   The tags will display correctly as individual pills (e.g., "Python", "AI").
*   The schema error will be resolved.
