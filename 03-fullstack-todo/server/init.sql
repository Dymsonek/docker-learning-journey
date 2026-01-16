-- Create todos table
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO todos (title, description, completed) VALUES
  ('Learn docker', 'Lorem ipsum todor', false),

-- Display confirmation
SELECT 'Database initialized successfully!' as message;
