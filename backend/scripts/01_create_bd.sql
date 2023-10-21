IF NOT EXISTS (SELECT 1 FROM sys.databases WHERE name = 'DB_Test')
BEGIN
    CREATE DATABASE db_test;
END