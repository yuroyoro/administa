class <%= "#{@options[:namespace].camelize}::#{class_name.pluralize}Controller" %> < <%= @options[:base_class] %>
  include Administa::Controller

  administa model: <%= class_name %>
end
