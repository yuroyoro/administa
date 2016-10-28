$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "administa/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "administa"
  s.version     = Administa::VERSION
  s.authors     = ["Tomohito Ozaki"]
  s.email       = ["ozaki@yuroyoro.com"]
  s.homepage    = "https://github.com/yuroyoro/administa"
  s.summary     = "The administration console framework/generator"
  s.description = "The administration console framework/generator"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["spec/**/*"]

  s.add_dependency "rails", '>= 3.2',  '< 5.0'
  s.add_dependency "anbt-sql-formatter"

  s.add_development_dependency "sqlite3"

  s.add_development_dependency "rspec"
  s.add_development_dependency "rspec-core"
  s.add_development_dependency "rspec-its"
  s.add_development_dependency "rspec-collection_matchers"
  s.add_development_dependency "rspec-set"
  s.add_development_dependency "shoulda-matchers"
  s.add_development_dependency "factory_girl_rails"
  s.add_development_dependency "database_cleaner"
  s.add_development_dependency "named_let"


end
