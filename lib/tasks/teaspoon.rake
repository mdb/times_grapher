Rake::Task[:spec].enhance do
  Rake::Task[:teaspoon].invoke
end
