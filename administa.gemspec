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
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", '>= 3.2',  '< 5.0'

  s.add_development_dependency "sqlite3"
end
